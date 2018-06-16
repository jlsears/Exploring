using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class MacroCommand : ICommand
    {
        public ICommand[] commands;

        public MacroCommand(ICommand[] commands)
        {
            this.commands = commands;
        }

        public void execute()
        {
            for (int i = 0; i < commands.Length; i++)
            {
                commands[i].execute();
            }
        }

        public void undo()
        {
            for(int j = 0; j < commands.Length; j++)
            {
                commands[j].undo();
            }
        }
    }
}
