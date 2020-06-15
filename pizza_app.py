from flask import Flask, render_template, request
import json 
app = Flask(__name__)


@app.route('/')
def index():
   return render_template('index.html')

@app.route('/prices/')
def prices():
   f = open("prices.json", "r")
   data = json.load(f)
   return json.dumps(data)

if __name__ == '__main__':
   app.run('localhost', 80)