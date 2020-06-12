from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
   return render_template('index.html')

@app.route('/users/', methods = ['GET', 'POST', 'PATCH'])
def users():
    if request.method == 'GET':
        return 'in get', 200
    elif request.method == 'POST':
        print(request.data)
        return 'in post', 200
    elif request.method == 'PATCH':
        return 'in patch', 200
    else:
        return 'Method Not Allowed' , 405