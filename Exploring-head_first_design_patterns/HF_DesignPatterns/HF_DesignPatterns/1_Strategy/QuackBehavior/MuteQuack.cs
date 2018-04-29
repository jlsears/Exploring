﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class MuteQuack: IQuackBehavior
    {
        public void Quack()
        {
            Console.WriteLine("<< Silence >>");
        }
    }
}