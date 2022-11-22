"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const commonRouteConfig_1 = require("../common/commonRouteConfig");
class UsersRoutes extends commonRouteConfig_1.commonRouteConfig {
    constructor(app) {
        super(app, "UsersRoutes");
    }
    configureRoutes() {
        this.app
            .route("/users")
            .get((req, res) => {
            res.status(200).send(`List of Users`);
        })
            .post((req, res) => {
            res.status(200).send("Post to users");
        });
        this.app
            .route("/users/:userId")
            .all((req, res, next) => {
            next();
        })
            .get((res, req) => {
            res.status(200).send(`GET requested for id ${req.params.userId}`);
        })
            .put((req, res) => {
            res.status(200).send(`PUT requested for id : ${req.params.userId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`PATCH requested for id : ${req.params.userId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE requested for id : ${req.params.userId}`);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXNlcnMvdXNlcnMucm91dGUuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1FQUErRDtBQUcvRCxNQUFhLFdBQVksU0FBUSxxQ0FBaUI7SUFDaEQsWUFBWSxHQUF3QjtRQUVsQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBRzNCLENBQUM7SUFDRCxlQUFlO1FBR2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2YsR0FBRyxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUdKLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBR3ZELElBQUksRUFBRSxDQUFBO1FBQ1IsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsR0FBYSxFQUFFLEdBQVksRUFBRSxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDbkUsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDckUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQ3JDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDdkUsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDeEUsQ0FBQyxDQUFDLENBQUE7UUFFSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztDQUNGO0FBMUNELGtDQTBDQyJ9