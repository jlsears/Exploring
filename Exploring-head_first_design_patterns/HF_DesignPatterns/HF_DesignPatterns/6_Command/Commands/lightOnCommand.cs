using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class lightOnCommand : ICommand
    {
        Light currentLight;

        public lightOnCommand(Light light)
        {
            this.currentLight = light;
        }

        public void execute()
        {
            currentLight.on();
        }

        public void undo()
        {
            currentLight.off();
        }
    }
}
