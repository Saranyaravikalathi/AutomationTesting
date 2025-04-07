const data = require('./data.json');
const assert = require('assert'); // Node.js built-in assertion library
describe('API Test for Project and Task Creation', function () {
    let projectId; // Variable to store project ID
    let taskId;
    let projectName;
   
    it('POST project', async function ({ supertest }) {
        this.timeout(30000);
  
        await supertest
            .request(data.requestUrl)
            .post('/api/project')
            .set('Content-Type', 'application/json')
            // Uncomment the next line and add the token if authorization is needed
            // .set('Authorization', `Bearer ${authToken}`)
            .set('Cookie', data.cookie) 
            .send({
               "application": "tasks",
                "empID": data.createProject.empID,
                "manager_email": data.createProject.email,
                "name": data.ProjectName,
                "project_manager": data.createProject.name,
                "start_date": "2024-11-27",
                "team_members": data.createProject.team_members
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // Parse the response body and extract the project ID
                const responseBody = response.body;
                console.log(response.body)
                projectId = responseBody.data.projectid;
                projectName = responseBody.data.name;
                const teammembers=JSON.stringify(responseBody.data.team_members, null, 2);
                const testteamMembers = JSON.stringify(data.createProject.team_members, null, 2);
                console.log("ProjectID=", projectId);
                console.log("ProjectName-" , projectName)
                console.log("Team members=", teammembers)
                console.log("Team members=", testteamMembers)
                assert.equal(testteamMembers, teammembers);

            })
            .catch(error => {
                console.error("API request failed:", error.response ? error.response.body : error.message);
            });
    });
    it('GET project', async function ({ supertest }) {
        this.timeout(30000);
  
        await supertest
            .request(data.requestUrl)
            .get(`/api/project?projectid=${projectId}`)
            .set('Content-Type', 'application/json')
            // Uncomment the next line and add the token if authorization is needed
            // .set('Authorization', `Bearer ${authToken}`)
            .set('Cookie', data.cookie)
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // Parse the response body and extract the project ID
                console.log(response.body)
              //   projectId = responseBody.data.projectid;
              //   projectName = responseBody.data.name;
              //   console.log("ProjectID=", projectId);
              //   console.log("ProjectName-" , projectName)
            })
            .catch(error => {
                console.error("API request failed:", error.response ? error.response.body : error.message);
            });
    });
    it('POST task', async function ({ supertest }) {
        if (!projectId) {
            console.error("Project ID is not available. Task creation skipped.");
            return;
        }
        this.timeout(30000);
        await supertest
            .request(data.requestUrl)
            .post('/api/task')
            .set('Content-Type', 'application/json')
            .set('Cookie', data.cookie)
            .send({
                "application": "tasks",
                "assigned_to":"",
                "assigned_to_email": data.task.assigned_to_email,
                "assigned_to_id": "",
                "assigned_to_name": data.task.assigned_to_name,
                "issues": data.task.issues,
                "name": data.task.taskname,
                "planned_end_date": data.task.planned_end_date,
                "planned_start_date": data.task.planned_start_date,
                "priorty": data.task.priorty,
                "projectid": projectId, // Assign project ID dynamically
                "projectName": projectName,
                "reporter_email": data.task.reporter_email,
                "reporter_id": "",
                "reporter_name": data.task.reporter_name,
                "sprintid": "",
                "status":data.task.status ,
                "summary": data.task.summary,
                "taskNo": data.task.taskNo,
                "task_des": data.task.task_des,
                "fileDetails": data.task.fileDetails
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
              // console.log(response.body)
              const responseBody = response.body;
              taskId = responseBody.data.taskid;
              console.log("Task ID=", taskId);
              
            })
            .catch(error => {
                console.error("API request failed:", error.response ? error.response.body : error.message);
            });
    });
    it('GET task', async function ({ supertest }) {
      this.timeout(30000);
  
      await supertest
          .request("https://dev2.lcp.neartekpod.io")
          .get(`/api/task?taskid=${taskId}`)
          .set('Content-Type', 'application/json')
          // Uncomment the next line and add the token if authorization is needed
          // .set('Authorization', `Bearer ${authToken}`)
          .set('Cookie', data.cookie)
          .expect(200)
          .expect('Content-Type', /json/)
          .then(response => {
              // Parse the response body and extract the project ID
              // const responseBody = response.body;
              console.log(response.body)
            //   projectId = responseBody.data.projectid;
            //   projectName = responseBody.data.name;
            //   console.log("ProjectID=", projectId);
            //   console.log("ProjectName-" , projectName)
          })
          .catch(error => {
              console.error("API request failed:", error.response ? error.response.body : error.message);
          });
      });
    it('POST sprint', async function ({ supertest }) {
      if (!taskId) {
          console.error("Task ID is not available. Task creation skipped.");
          return;
      }
      this.timeout(30000);
      await supertest
          .request(data.requestUrl)
          .post('/api/sprint')
          .set('Content-Type', 'application/json')
          .set('Cookie', data.cookie)
          .send({
              "application": "Sprint",
              "sprintid": "",
              "name": data.createsprint.name,
              "projectid": projectId,
              "projectName": projectName,
              "sprint_end_date": data.createsprint.sprint_end_date,
              "sprint_start_date": data.createsprint.sprint_start_date,
              "task": [
                taskId
                
              ]
          })
          .expect(200)
          .expect('Content-Type', /json/)
          .then(response => {
          //   console.log(response.body)
            const responseBody = response.body;
            sprintId = responseBody.data.sprintid;
            console.log("Sprint ID=", sprintId);
            
          })
          .catch(error => {
              console.error("API request failed:", error.response ? error.response.body : error.message);
          });
  });
  it('GET sprint', async function ({ supertest }) {
      this.timeout(30000);
  
      await supertest
          .request(data.requestUrl)
          .get(`/api/sprint?sprintid=${sprintId}`)
          .set('Content-Type', 'application/json')
          // Uncomment the next line and add the token if authorization is needed
          // .set('Authorization', `Bearer ${authToken}`)
          .set('Cookie', data.cookie)
          .expect(200)
          .expect('Content-Type', /json/)
          .then(response => {
              // Parse the response body and extract the project ID
              // const responseBody = response.body;
              console.log(response.body)
            //   projectId = responseBody.data.projectid;
            //   projectName = responseBody.data.name;
            //   console.log("ProjectID=", projectId);
            //   console.log("ProjectName-" , projectName)
          })
          .catch(error => {
              console.error("API request failed:", error.response ? error.response.body : error.message);
          });
  });
  });