import time
from flask import Flask, request, Response
from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId

app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client['test']

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/get-<item>', methods=['GET'])
def getThings(item=None):
	collection = db[item]
	if (request.args.get('_id') != None):
		args = {'_id': ObjectId(request.args.get('_id'))}
	else:
		args = request.args
	r = Response(response = dumps(collection.find(args)), mimetype="application/json")
	return r

@app.route('/add-<item>', methods=['POST'])
def addThing(item=None):
	collection = db[item]
	#Returns the id of the added item
	postId = collection.insert_one(request.json).inserted_id
	r = Response(response = dumps(postId), mimetype="application/json")
	return r

@app.route('/remove-<item>', methods=['DELETE'])
def removeThing(item=None):
	collection = db[item]
	if (request.args.get('_id') != None):
		args = {'_id': ObjectId(request.args.get('_id'))}
	else:
		args = request.args
	item = collection.find_one_and_delete(args)
	r = Response(response = dumps(item), mimetype="application/json")
	return r
