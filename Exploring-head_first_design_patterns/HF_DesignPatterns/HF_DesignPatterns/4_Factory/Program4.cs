﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class Program4
    {
        static void Main4(string[] args)
        {
            PizzaStore nyPizzaStore = new NYPizzaStore();

            nyPizzaStore.orderPizza("cheese");
    
            Console.ReadLine();
        }
    }
}
