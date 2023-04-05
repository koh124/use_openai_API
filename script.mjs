import { Configuration, OpenAIApi } from "openai";
import Dotenv from "dotenv";

// read .env
Dotenv.config();

console.log(process.env.OPENAI_API_KEY)

const askChatGPT = async () => {
  const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY })
  const openai = new OpenAIApi(configuration)

  const model = 'text-davinci-002'
  const prompt = "say hello world in various programming languages."

  const completion = await openai.createCompletion({
    model,
    prompt
  })

  const result = completion.data

  console.log(completion)
  console.log(result)
}

askChatGPT()
