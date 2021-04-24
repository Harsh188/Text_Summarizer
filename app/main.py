import os
from flask import Flask, jsonify, request
from transformers import PegasusTokenizer, PegasusForConditionalGeneration
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

model_path = "./pegasus-xsum"

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/summarize', methods=['GET','POST'])
def summarize():
    text = request.args.get('text')
    api_key = request.args.get('api_key')
    if text is None or api_key != "MyCustomerApiKey":
        return jsonify(code=403, message="bad request")

    tokenizer = PegasusTokenizer.from_pretrained(model_path,local_files_only=True,force_download=True)
    model = PegasusForConditionalGeneration.from_pretrained(model_path,local_files_only=True,force_download=True)
    inputs = tokenizer([text],max_length=1024,return_tensors='pt')
    summary_ids = model.generate(inputs['input_ids'])
    summary = [tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids]
    # print(summary)
    return jsonify(summary)

if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))