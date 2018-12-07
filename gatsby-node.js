const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const internTemplate = path.resolve("src/templates/internPage.js");
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allDataJson {
            group(field:pusher___name) {
              fieldValue
            }
          }
        }`).then(result => {
        console.log(result.data.allDataJson.group);
        result.data.allDataJson.group.forEach(({ fieldValue }) => {
          console.log("creating page for",fieldValue);
          createPage({
            path: `/interns/${fieldValue}`,
            component: internTemplate,
            context: { intern: fieldValue },
          });
        });
        resolve();
      })
    );
  });
};
