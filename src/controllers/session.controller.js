import createSessionService from "../services/createSession.service";

const createSessionController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await createSessionService({ email, password });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export { createSessionController };
