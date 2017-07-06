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

            // Instantiating a mallard duck

            Duck mallard = new MallardDuck();

            mallard.performQuack();

            mallard.performFly();

            // Instantiating a model duck and dynamically changing its flying behavior

            Duck model = new ModelDuck();

            model.performFly();

            model.setFlyBehavior(new FlyRocketPowered());

            model.performFly();

            Console.ReadLine();
        }
    }
}
