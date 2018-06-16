using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class lightOffCommand : ICommand
    {
        Light currentLight;

        public lightOffCommand(Light light)
        {
            this.currentLight = light;
        }

        public void execute()
        {
            currentLight.off();
        }

        public void undo()
        {
            currentLight.on();
        }
    }
}
