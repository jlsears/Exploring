using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class hottubOnCommand : ICommand
    {
        Hottub theHottub;

        public hottubOnCommand(Hottub hottub)
        {
            this.theHottub = hottub;
        }

        public void execute()
        {
            theHottub.on();
        }

        public void undo()
        {
            theHottub.off();
        }
    }
}
