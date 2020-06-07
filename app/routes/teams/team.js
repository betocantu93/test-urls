import Route from "@ember/routing/route";

export default class TeamsTeamRoute extends Route {
  model({ id }) {
    return this.modelFor("teams").findBy("id", id);
  }
}
