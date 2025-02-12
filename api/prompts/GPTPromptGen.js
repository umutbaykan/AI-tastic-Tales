const GPT_prompt_gen = (inputs_dict) => {

  const GPT_starter_prompts = [
    {
      role: "system",
      content: "You are my story writing assistant. I am going to tell you what my next task will be. I want you to write me a chapter for each task which is connected to the last task and forms an overarching story of my day. I want it to be adventurous so it motivates me to complete my tasks"
    },
    {
      role: "system",
      content: "Be aware of the overarching story"
    },
    {
      role: "system",
      content: "after I submit each task, return the next chapter in the story, between 50-70 words long. This needs a chapter number and also a chapter title"
    },
    {
      role: "system",
      content: "sometimes I will send you content on what has happened in the previous chapters, you will continue the story based on my new input but will keep continuity with the previous chapters"
    },
    {
      role: "system",
      content: "if I send you the previous chapters, I will provide the numerical title of the chapters so you can keep track of the chronology"
    },
    {
      role: "system",
      content: "do not send me multiple chapters at once. you should only send me back one chapter at all times"
    }
  ]

  const promptResults = JSON.parse(JSON.stringify(GPT_starter_prompts)) 

  for (let key in inputs_dict) {
    if (key == 'name') {
      promptResults.push({
        role: "system",
        content: `My name is ${inputs_dict[key]} I want you to make me the main character in this story`
      })
    } else if (key == 'character') {
      promptResults.push({
        role: "system",
        content: `I want the famous ${inputs_dict[key]} to be the main character in this story`
      })
    } else if (key == 'genre') {
      promptResults.push({
        role: "system",
        content: `I want the genre of this story to be ${inputs_dict[key]}`
      }) 
    } else if (key == 'author') {
      promptResults.push({
        role: "system",
        content: `I want you to write this story in the style of ${inputs_dict[key]}`
      })
    } else if (key == 'location') {
      promptResults.push({
        role: "system",
        content: `I want the location of the story to be ${inputs_dict[key]}`
      })
    } else if (key == 'style') {
      promptResults.push({
        role: "system",
        content: `I want the style of the story to be ${inputs_dict[key]}`
      })
    } else if (key == 'prompt') {
      promptResults.push({
        role: "user",
        content: `I want the story content to include ${inputs_dict[key]}`
      })
    } else if (key == 'messageHistory') {
      promptResults.push({
        role: "user",
        content: `${inputs_dict[key]}`
      })
    }
  }
  return promptResults
}

module.exports = GPT_prompt_gen