const data = require('./data.json');
const assert = require('assert'); // Node.js built-in assertion library
let projectId;

describe('Create project', function () {
    it('POST project', async function ({ supertest }) {
        this.timeout(30000);
        await supertest
            .request(data.requestUrl)
            .post('/api/project')
            .set('Content-Type', 'application/json')
            .set('cookie', data.cookie)
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
                // Parse the response body and extract the project details
                const responseBody = response.body;
                const teamMembers = JSON.stringify(responseBody.data.team_members, null, 2);
                const testteamMembers = JSON.stringify(data.createProject.team_members, null, 2);
                const projectId = responseBody.data.projectid;
                // Assertions
                console.log("Response Body:", responseBody)
                // console.log('data',testteamMembers)
                // console.log('Team Members:', teamMembers)
                console.log('Project Name', responseBody.data.name)
                console.log('Project Id', projectId)
                assert.equal(testteamMembers, teamMembers);    
                // assert.equal(status==200)
            })
            .catch(error => {
                console.error("API request failed:", error.response ? error.response.body : error.message);
            });
    });
    describe('edit project', function () {
    it('PUT project', async function ({ supertest }) {
        this.timeout(30000);
        await supertest
            .request(data.requestUrl)
            .put('/api/project')
            .set('Content-Type', 'application/json')
            .set('cookie', data.cookie)
            .send({
                "application": "tasks",
                "empID": data.editProject.empID,
                "manager_email": data.editProject.email,
                "name": data.editProject.ProjectName,
                "projectid": projectId,
                "project_manager": data.createProject.name,
                "start_date": "2024-11-27",
                "team_members": data.editProject.team_members
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // Parse the response body and extract the project details
                const responseBody = response.body;
                const teamMembers = JSON.stringify(responseBody.data.team_members, null, 2);
                const testteamMembers = JSON.stringify(data.editProject.team_members, null, 2);
                // Assertions
                console.log("Response Body:", responseBody)
                // console.log('data',testteamMembers)
                // console.log('Team Members:', teamMembers)
                console.log('Project Name', responseBody.data.name)
                console.log('Project Id', responseBody.data.projectid)
                assert.equal(testteamMembers, teamMembers);    
                // assert.equal(status==200)
            })
            .catch(error => {
                console.error("API request failed:", error.response ? error.response.body : error.message);
            });
    });

});
});

  // it('PUT task', async function ({ supertest }) {
//     if (!taskId) {
//         console.error("Task ID is not available. Task creation skipped.");
//         return;
//     }
//     this.timeout(30000);
//     await supertest
//         .request("https://dev2.lcp.neartekpod.io")
//         .put('/api/project')
//         .set('Content-Type', 'application/json')
//         .set('Cookie', cookie) 
//         .send({
//             "application": "tasks",
//             "empID": "916713ab-c4c2-4f9b-a3a5-d10d05bda79f",
//             "manager_email": "kavinkumar.velusamy@neartekpod.com",
//             "name": projectName2,  
//             "projectid":"11e03e0d-1b3b-4a81-a86c-a772b19ed7c7",
//             "project_manager": "Kavin Kumar",
//             "start_date": "2024-11-27",
//             "status": "Created",
//             "team_members": [
//              {
//               "email": "karthic.saravanan@neartekpod.com",
//               "empID": "47d81459-768e-4960-8da0-77290ad27011",
//               "name": "Karthic S"
//              },
//              {
//               "email": "sridhar.chandrasekar@neartekpod.com",
//               "empID": "4e3a567b-319d-4a09-821a-271428ae9707",
//               "name": "Sridhar chandrasekar"
//              }
//             ]
//            })
//         .expect(200)
//         .expect('Content-Type', /json/)
//         .then(response => {
//         //   console.log(response.body)
//           const responseBody = response.body;
//           sprintId = responseBody.data.sprintid;
//           console.log("Sprint ID=", sprintId);
          
//         })
//         .catch(error => {
//             console.error("API request failed:", error.response ? error.response.body : error.message);
//         });
// });