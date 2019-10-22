# from flask import Flask, request,jsonify
# app = Flask(__name__)

# @app.route('/', methods=['GET'])
# def get_user():
#   question = request.form['q']
#   print("QUESTION: ",question)
#   tagarr=["python","html"]
#   return jsonify({"tags":tagarr})

# app.run()

from flask import Flask,request,jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    question = request.args.get('q')
    print("QUESTION: ",question)
    tagarr=["python","html"]
    return (jsonify({"tags":tagarr}))
    

app.run()