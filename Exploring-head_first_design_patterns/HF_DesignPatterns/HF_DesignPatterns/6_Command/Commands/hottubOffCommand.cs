using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class hottubOffCommand : ICommand
    {
        Hottub theHottub;

        public hottubOffCommand(Hottub hottub)
        {
            this.theHottub = hottub;
        }

        public void execute()
        {
            theHottub.off();
        }

        public void undo()
        {
            theHottub.on();
        }
    }
}
