// tslint:disable-next-line:no-var-requires
const request = require('superagent');
export default {
  add(x: number, y: number) {
    return x + y;
  }
  ,
  asyncProc(callback: any) {
    request('https://github.com/Will233/koa-template/blob/master/mock/data.json',  (err: any, res: any, body: any) => {
      callback(err, res, body);
    });
  }
};
