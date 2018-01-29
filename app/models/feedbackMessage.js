export default class FeedbackMessage {
	
	constructor(type,msg) {
		this._msgType=type;
		this._msg=msg;
	}
	
	get msgType() {
        return this._msgType;
    }
    
    set msgType(val) {
           this._msgType = val;
    }
    
    get msg() {
        return this._msg;
    }
    
    set msg(val) {
           this._msg = val;
    }
    
    
    
}