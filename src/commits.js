import ld from "lodash";

const latestCommit = commits => ld.sortBy(commits,(c)=>c.node.commit.timestamp).reverse();

class Commits {
  constructor(allCommits) {
    this.allCommits = allCommits;
  }

  latestCommitPerPerson() {
    return ld.map(this.groupedByPerson(),latestCommit);
  }

  groupedByPerson() {
    let groups = ld.groupBy(this.allCommits,(d)=>d.node.pusher.name)
    let sortedGroups = ld.map(groups,latestCommit);
    return sortedGroups
  }
}

export default Commits;