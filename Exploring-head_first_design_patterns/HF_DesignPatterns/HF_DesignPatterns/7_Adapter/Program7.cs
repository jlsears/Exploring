using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class Program7
    {
        static void Main7(string[] args)
        {
            MallardDuck2 duck = new MallardDuck2();

            WildTurkey turkey = new WildTurkey();

            TurkeyAdapter turkeyAdapter = new TurkeyAdapter(turkey);

            Console.WriteLine("The turkey says...");

            turkey.gobble();
            turkey.fly();

            Console.WriteLine("\nThe duck says...");

            TestDuck tduck1 = new TestDuck(duck);

            Console.WriteLine("\nThe turkey adapter says...");

            TestDuck tduck2 = new TestDuck(turkeyAdapter);


            Console.ReadLine();
        }
    }
}
