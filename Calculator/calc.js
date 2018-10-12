            var num1;
            var num2;
            var op;
            var res;
            var exp;
            var explen;
            //console.log(op);
            document.getElementById("demo").value="hello world";
            var str = document.getElementById("demo").value;
            
            document.getElementById('demo1').innerHTML = str;
            function one()
            {
                
                var ch = document.getElementById("demo").value;
                
                if(ch=='hello world')
                {
                    exp = '1';
                    document.getElementById('demo').value=exp[0];
                    num1 =  parseInt(exp,10);

                }
                else
                {
                    if(op == undefined)
                    {
                        exp = exp + '1';
                        document.getElementById('demo').value=exp;
                        num1 = parseInt(exp,10);
                        console.log("exp = " + exp);
                        console.log("num1 = "+num1);
                    }
                    else
                    {
                        num2 = 1;
                    }
                    
                  
                    result();
                }
            }
            function two()
            {
                var ch = document.getElementById("demo").value;
                if(ch=='hello word')
                {
                    document.getElementById('demo').value="2";
                    num1=2;
                }
                else
                {
                    document.getElementById('demo').value="2";
                    num2 = 2;
                    result();
                }
              
            }
            function operator()
            {
                document.getElementById('demo').value = "+";
                op = '+';
            }
            function result()
            {
                if(op == '+')
                {
                    document.getElementById('demo').value = num1+num2;
                }
            }
           