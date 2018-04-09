using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class NYPizzaStore : PizzaStore
    {
        public override Pizza createPizza(String item)
        {
            Pizza pizza = null;

            PizzaIngredientFactory ingredientFactory = new NYPizzaIngredientFactory();

            if(item.Equals("cheese"))
            {
                pizza = new CheesePizza(ingredientFactory);
                pizza.setName("New York Style Cheese Pizza");
            }

            else
            {
                Console.WriteLine("That style of pizza not currently available :(");
            }

            return pizza;
        }
    }
}
