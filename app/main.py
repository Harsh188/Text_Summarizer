import os
from flask import Flask, jsonify, request
from transformers import pipeline

app = Flask(__name__)

model_path = "./model"

@app.route('/')
def summarize():
    text = request.args.get('text')
    api_key = request.args.get('api_key')
    if text is None or api_key != "MyCustomerApiKey":
        return jsonify(code=403, message="bad request")
    summary = pipeline("summarization", model=model_path, tokenizer=model_path)
    print(summary)
    print(sumary(text))
    print(jsonify(summary(text)))
    return jsonify(summary(text))

if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))

