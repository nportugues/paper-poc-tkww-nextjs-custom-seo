import { TKHeader, WWHeader } from "./Headers"

export const TKApp = ({children}) => (
   <>
   <TKHeader />
   {children}
   </>
)

export const WWApp = ({children}) => (
    <>
   <WWHeader />
   {children}
   </>
)