import { expect } from 'chai';
import mochaDemoService from '@/api/mocha-demo-service';
const request = require('superagent');

describe('TableService', () => {
  describe('hooks', () => {
    let foo = false;
    let num = 1;
    let info = false;
    let addNum = false;

    before(() => {
      foo = true;
      console.log(1);
      // 在本区块的所有测试用例之前执行
    });

    beforeEach(() => {
      info = true;
      console.log(2);
      // 在本区块的每个测试用例之前执行
    });
    after(() => {
      ++num;
      console.log(3);
      // 在本区块的所有测试用例之后执行
    });
    afterEach(() => {
      ++num;
      addNum = true;
      console.log(4);
      // 在本区块的每个测试用例之后执行
    });

    it('修改全局变量应该成功', () => {
      expect(foo).to.be.equal(true);
    });
    it('修改num没成功', () => {
      expect(num).to.be.equal(1);
    });
    it('修改info成功', () => {
      expect(info).to.be.equal(true);
    });
    it('修改addNum没成功', () => {
      expect(addNum).to.be.equal(true);
    });

  });
  describe('加法函数的测试', () => {
    it('1 加 1 应该等于 2', () => {
      expect(mochaDemoService.add(1, 1)).to.be.equal(2);
    });
  });
  describe('测试异步过程', () => {
    // it('发送异步请求, response statusCode == 200', (done) => {
    //   mochaDemoService.asyncProc((err: any, res: any, body: any) => {
    //     expect(res.statusCode).to.be.equal(200);
    //     done();
    //   });
    // });
    it('测试应该5000毫秒后结束', (done) => {
      const x = true;
      const f = () => {
         // tslint:disable-next-line:no-shadowed-variable
         const x = false;
         // tslint:disable-next-line:no-unused-expression
         expect(x).to.be.not.ok;
         done(); // 通知Mocha测试结束
      };
      setTimeout(f, 4000);
    });
  });

});
