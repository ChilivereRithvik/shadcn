import Layout from "./components/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Upgrade() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Upgrade Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Base Plan</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$5/month</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>6 Months Plan</CardTitle>
              <CardDescription>Great value for half a year</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$10/month</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>1 Year Plan</CardTitle>
              <CardDescription>Best value for long-term users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$50/year</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

