using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class Program8
    {
        static void Main(string[] args)
        {
            Tea myTea = new Tea();

            myTea.prepareRecipe();

            Coffee myCoffee = new Coffee();

            myCoffee.prepareRecipe();

            Console.ReadLine();
        }
    }
}
