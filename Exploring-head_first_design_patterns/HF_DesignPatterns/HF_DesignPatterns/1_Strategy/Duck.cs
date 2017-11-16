using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public abstract class Duck
    {
        public IFlyBehavior flyBehavior { get; set; }
        public IQuackBehavior quackBehavior { get; set; }

        public Duck() { }

        public abstract void display();

        public void performFly()
        {
            flyBehavior.Fly();
        }

        public void performQuack()
        {
            quackBehavior.Quack();
        }

        public void swim()
        {
            Console.WriteLine("All ducks float, even decoys!");
        }

        public void setFlyBehavior(IFlyBehavior fb)
        {
            flyBehavior = fb;
        }

        public void setQuackBehavior(IQuackBehavior qb)
        {
            quackBehavior = qb;
        }
    }
}
