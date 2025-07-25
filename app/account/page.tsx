import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/firebase/server";
import { Label } from "@radix-ui/react-dropdown-menu";
import { DecodedIdToken } from "firebase-admin/auth";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import UpdatePasswordForm from "./components/update-password-form";
import DeleteAccountButton from "./components/delete-account-button";
import { generateMetadata } from "@/data/metadata";
import Link from "next/link";

// Export metadata from server component
export const metadata = generateMetadata("account");

export default async function Account() {
  const cookieStore = await cookies()
  const token = cookieStore.get("firebaseAuthToken")?.value

  if (!token) {
    redirect("/");
  }

  let decodedToken: DecodedIdToken;

  try {
    decodedToken = await auth.verifyIdToken(token);
  } catch (e) {
    redirect("/");
  }

  const user = await auth.getUser(decodedToken.uid);

  const isPasswordProvider = !!user.providerData.find(
    (provider) => provider.providerId === "password"
  );

  return (
    <div className="max-w-screen-sm mx-auto">
      <Card className="mt-10">

        <CardHeader>
          <CardTitle className="text-3xl font-bold">My Account</CardTitle>
        </CardHeader>

        <CardContent>
          <Label>Email</Label>
          <div>{decodedToken.email}</div>
          {!!isPasswordProvider && <UpdatePasswordForm />}
        </CardContent>

        <CardContent>
          {decodedToken.admin && (
            <div>
              <span>You logged in using your
                <span className="font-bold"> {decodedToken.firebase.sign_in_provider}</span> account. </span>
              <span>Please login to your provider account to update your details.</span>
              <div>
                <Link
                  href={`https://www.${decodedToken.firebase.sign_in_provider}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-bold">
                    Click Here!
                  </span>
                </Link>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col items-start">
          <h2 className="text-red-500 text-2xl font-bold mb-2">
            Danger Zone
          </h2>
          <DeleteAccountButton isAdmin={decodedToken.admin} />
        </CardFooter>

      </Card>
    </div>
  )
}