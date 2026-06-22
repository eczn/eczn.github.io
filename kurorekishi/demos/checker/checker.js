function checker(config, thisArg){
    thisArg = thisArg || this; 
    var validator = {
        exist: function(val){ 
            return !!val; 
        },
        // 长度大于等于 n 吗？
        lengthMoreThan(val, n){
            return val.length >= n; 
        },
        // 长度小于等于 n 吗？
        lengthLessThan: function(value, length){
            return value.length <= length; 
        },
        // 是手机号吗？ 
        isPhone: function(tel){
            return /^1(3|5|7|8|9)[0-9]{9}$/.test(tel); 
        },
        // a 严格等于 b 吗？ 
        equal: function(a, b){
            return a === b; 
        },
        // n 是数字吗？
        isNumber: function(n){ 
            return /^[0-9]*$/.test(n); 
        }
    }

    var result = config.filter(val => {
        var isAllChecked = val.todos.every(todo => {
            return validator[todo.method].apply(thisArg, todo.args); 
        }); 
        
        return !isAllChecked; 
    }); 

    return function(success, fail){
        if (result.length !== 0){
            // 说明有数据未通过验证 
            fail(result.map(e => e.err));
        } else {
            success(config)
        }
    }
}

function configGenerator(vals){

    var userPhone = vals.userPhone
      , userName = vals.userName
      , userSex = vals.userSex
      , userPwd = vals.userPwd
      , userPwd2 = vals.userPwd2
      , userVeri = vals.userVeri; 

    var config = [
        {
            todos: [
                { method: 'isPhone', args: [userPhone] }
            ],
            err: '手机号输入错误'
        },
        {
            todos: [
                { method: 'lengthLessThan', args: [userName, 12] },
                { method: 'lengthMoreThan', args: [userName, 6] },
            ],
            err: '用户名应该为 6 ~ 12 个字符之间'
        },
        {
            todos: [
                { method: 'exist', args: [userSex] },
            ],
            err: '性别未填写'
        }, 
        {
            todos: [
                { method: 'lengthMoreThan', args: [userPwd, 6] }
            ],
            err: '密码不得少于 6 个字符'
        },
        {
            todos: [
                { method: 'equal', args: [userPwd, userPwd2] }
            ],
            err: '前后密码输入不一致'
        },
        {
            todos: [
                { method: 'isNumber', args: [userVeri] },
                { method: 'lengthLessThan', args: [userVeri, 4] },
                { method: 'lengthMoreThan', args: [userVeri, 4] }
            ],
            err: '请输入合法的 4 位数字验证码'
        }
    ];

    return config; 
}
