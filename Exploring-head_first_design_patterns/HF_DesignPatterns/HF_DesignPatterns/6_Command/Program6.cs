using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class Program6
    {
        static void Main(string[] args)
        {
            Remote remoteControl = new Remote();

            // Implementing regular commands

            Light livingRoomLight = new Light("Living Room");
            lightOnCommand livingRoomLightOn = new lightOnCommand(livingRoomLight);
            lightOffCommand livingRoomLightOff = new lightOffCommand(livingRoomLight);

            Stereo livingRoomStereo = new Stereo("Living Room");
            stereoOnCommand livingRoomStereoOn = new stereoOnCommand(livingRoomStereo);
            stereoOffCommand livingRoomStereoOff = new stereoOffCommand(livingRoomStereo);

            remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
            remoteControl.setCommand(1, livingRoomStereoOn, livingRoomStereoOff);

            remoteControl.onButtonWasPushed(0);
            remoteControl.onButtonWasPushed(1);
           
            remoteControl.undoButtonWasPushed();

            remoteControl.offButtonWasPushed(0);

            Hottub patioHottub = new Hottub();
            hottubOnCommand patioHottubOn = new hottubOnCommand(patioHottub);
            hottubOffCommand patioHottubOff = new hottubOffCommand(patioHottub);

            // Implementing macro commands

            ICommand[] partyOn = { livingRoomLightOn, livingRoomStereoOn, patioHottubOn };
            ICommand[] partyOff = { livingRoomLightOff, livingRoomStereoOff, patioHottubOff };

            MacroCommand partyOnMacro = new MacroCommand(partyOn);
            MacroCommand partyOffMacro = new MacroCommand(partyOff);

            remoteControl.setCommand(2, partyOnMacro, partyOffMacro);

            remoteControl.onButtonWasPushed(2);
            remoteControl.undoButtonWasPushed();

            Console.ReadLine();
        }
    }
}
