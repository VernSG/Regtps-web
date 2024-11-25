import * as React from "react";
import { toast } from "react-toastify";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button-how";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HowToPlayCards() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Host copied to clipboard!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white mb-6">
        How to Play?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-[1200px]">
        {/* Desktop Card */}
        <Card className="w-[350px] bg-black text-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Desktop</CardTitle>
            <CardDescription>Play ReGTPS on PC</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Follow the steps to play ReGTPS on your Desktop device.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="hover:bg-gray-800">
                  Details
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="animate-fadeIn">
                <AlertDialogHeader>
                  <AlertDialogTitle>Play ReGTPS on PC</AlertDialogTitle>
                  <AlertDialogDescription>
                    Follow the steps below:
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-2 text-sm">
                  <ol className="list-decimal pl-5">
                    <li>
                      Press ⊞ Win+R (Windows Key + R) to open up the "Run"
                      window.
                    </li>
                    <li>
                      Type in <b>C:\Windows\System32\drivers\etc</b> in the
                      textbox.
                    </li>
                    <li>
                      Find the file named <b>hosts</b>.
                    </li>
                    <li>
                      Right-click on "hosts" file and edit it with Notepad/text
                      editor.
                    </li>
                    <li>
                      Add in the IP:
                      <ul className="list-disc pl-5">
                        <li>35.240.175.117 www.growtopia1.com</li>
                        <li>35.240.175.117 www.growtopia2.com</li>
                      </ul>
                    </li>
                    <li>Save the file.</li>
                  </ol>
                </div>
                <AlertDialogFooter className="flex flex-wrap gap-4 justify-between">
                  <AlertDialogCancel>Close</AlertDialogCancel>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-800"
                    onClick={() =>
                      handleCopy(
                        "35.240.175.117 www.growtopia1.com\n35.240.175.117 www.growtopia2.com"
                      )
                    }
                  >
                    Copy Host
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
        {/* Android Card */}
        <Card className="w-[350px] bg-black text-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Android</CardTitle>
            <CardDescription>Play ReGTPS on Android Device</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Follow the steps to play ReGTPS on your Android device.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="hover:bg-gray-800">
                  Details
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="animate-fadeIn">
                <AlertDialogHeader>
                  <AlertDialogTitle>Play ReGTPS on Android</AlertDialogTitle>
                  <AlertDialogDescription>
                    Follow the steps below:
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-2 text-sm">
                  <ol className="list-decimal pl-5">
                    <li>Download Virtual Host in Playstore.</li>
                    <li>Download ReGTPS file from the provided link.</li>
                    <li>
                      Open the Virtual Host app and click the "HOSTS FILE"
                      button.
                    </li>
                    <li>
                      Choose the host file named "ReGTPS" from your download
                      folder.
                    </li>
                    <li>
                      Click "Accept Connection" or "Terima Koneksi" if you
                      haven't accepted it yet.
                    </li>
                    <li>
                      Done! Now you can log in to Growtopia and play ReGTPS.
                    </li>
                  </ol>
                </div>
                <AlertDialogFooter className="flex flex-wrap justify-between gap-4">
                  <AlertDialogCancel>Close</AlertDialogCancel>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-800"
                    onClick={() =>
                      window.open(
                        "https://www.mediafire.com/file/fx4fz1l6jhv69ii/ReGTPS_S1.host/file",
                        "_blank"
                      )
                    }
                  >
                    VHost
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-800"
                    onClick={() =>
                      window.open(
                        "https://login.gtps.tech/powertunnel.hosts",
                        "_blank"
                      )
                    }
                  >
                    PTunnel
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>

        {/* iOS Card */}
        <Card className="w-[350px] bg-black text-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">iOS</CardTitle>
            <CardDescription>Play ReGTPS on iOS Device</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Follow the steps to play ReGTPS on your iOS device.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="hover:bg-gray-800">
                  Details
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="animate-fadeIn">
                <AlertDialogHeader>
                  <AlertDialogTitle>Play ReGTPS on iOS</AlertDialogTitle>
                  <AlertDialogDescription>
                    Follow the steps below:
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-2 text-sm">
                  <ol className="list-decimal pl-5">
                    <li>Download surge 5 on AppStore.</li>
                    <li>Click on "default" at the left top.</li>
                    <li>Click the "Edit in Text Mode".</li>
                    <li>Delete all the text and copy this:</li>
                    <pre className="text-white p-2 rounded">
                      {`[General]

[Rule]

FINAL,DIRECT

[Host]

www.growtopia1.com=35.240.175.117

www.growtopia2.com=35.240.175.117`}
                    </pre>
                  </ol>
                </div>
                <AlertDialogFooter className="flex flex-wrap gap-4 justify-between">
                  <AlertDialogCancel>Close</AlertDialogCancel>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-800"
                    onClick={() =>
                      handleCopy(`

www.growtopia1.com=35.240.175.117

www.growtopia2.com=35.240.175.117`)
                    }
                  >
                    Copy Host
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
