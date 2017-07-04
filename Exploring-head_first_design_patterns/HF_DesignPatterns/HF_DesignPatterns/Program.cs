using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Duck-related program is starting");

            MallardDuck mallard = new MallardDuck();

            mallard.performQuack();

            mallard.performFly();

            Console.ReadLine();
        }
    }
}
