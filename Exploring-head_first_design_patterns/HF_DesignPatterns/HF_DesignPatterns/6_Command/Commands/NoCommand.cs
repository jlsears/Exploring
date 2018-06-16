using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class NoCommand : ICommand
    {
        public void execute() { }

        public void undo() { }
    }
}
