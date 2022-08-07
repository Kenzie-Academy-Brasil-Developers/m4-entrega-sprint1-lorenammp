import express from "express";
import userRouter from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";

const app = express();
app.use(express.json());

const port = 3002;

app.use("/users", userRouter);
app.use("/login", sessionRoutes);

app.listen(port);

export default app;
