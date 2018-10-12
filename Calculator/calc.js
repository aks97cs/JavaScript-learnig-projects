

            var num1;
            var num2;
            var op;
            var res;
            document.getElementById("demo").value="hello world";
            var str = document.getElementById("demo").value;
            console.log(typeof str);
            document.getElementById('demo1').innerHTML = str;
            function one()
            {
                
                var ch = document.getElementById("demo").value;
                
                if(ch=='hello world')
                {
                    document.getElementById('demo').value="1";
                    num1 =  1;

                }
                else
                {
                    num2 = 1;
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
           // document.getElementById('demo').value