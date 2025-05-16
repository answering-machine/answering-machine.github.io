const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"model":"accounts/fireworks/models/llama-v3p1-8b-instruct","messages":[{"role":"system","content":"<string>","name":"<string>"}],"tools":[{"type":"function","function":{"description":"<string>","name":"<string>","parameters":{"type":"object","required":["<string>"],"properties":{}}}}],"max_tokens":2000,"prompt_truncate_len":1500,"temperature":1,"top_p":1,"top_k":50,"frequency_penalty":0,"presence_penalty":0,"repetition_penalty":1,"reasoning_effort":"low","mirostat_lr":0.1,"mirostat_target":1.5,"n":1,"ignore_eos":false,"stop":"<string>","response_format":null,"stream":false,"context_length_exceeded_behavior":"truncate","user":"<string>"}'
};

fetch('https://api.fireworks.ai/inference/v1/chat/completions', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
