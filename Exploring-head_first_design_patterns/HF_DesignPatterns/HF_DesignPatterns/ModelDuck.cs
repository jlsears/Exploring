using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class ModelDuck: Duck
    {
        public ModelDuck()
        {
            quackBehavior = new ActualQuack();
            flyBehavior = new FlyNoWay();
        }

        public override void display()
        {
            Console.WriteLine("I'm a model duck");
        }
    }
}
