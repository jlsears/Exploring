using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public abstract class PizzaStore
    {
        public Pizza orderPizza(String type)
        {
            Console.WriteLine("Preparing to order pizza!");

            Pizza pizza;

            pizza = createPizza(type);

            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();

            return pizza;
        }

        public abstract Pizza createPizza(String type);
    }
}
