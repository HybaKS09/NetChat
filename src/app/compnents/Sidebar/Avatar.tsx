"use client"
import Image from "next/image"
import type { User } from "@prisma/client"
import getCurrentUser from "@/app/helpers/getCurrentUser_F"
import { useEffect, useState } from "react"

interface AvatarProps{
    showProfile: ()=>void
    user: User
}

const Avatar = ({ showProfile, user }: AvatarProps) => {
    const [ currentUser, setCurrentUser ] = useState<User | undefined>(undefined)

    useEffect(()=>{
        getCurrentUser(user?.email!)
        .then((callback)=>{
            setCurrentUser(callback)
        })
    }, [user])

    return (
        <div onClick={showProfile} title={user?.name!} className="text-white my-2 mx-1 cursor-pointer rounded-fulL w-[8.5vh] h-[8.5vh] relative md:order-first md:hidden">
            <Image
                src={currentUser?.image ? currentUser?.image : "/images/default-profile.jpg"}
                alt={currentUser?.name ? currentUser?.name : "user_image"}
                width={100}
                height={100}
                className="rounded-full w-full h-full"
            />
            <div className="absolute w-3 h-3 p-[1px] bg-white rounded-full right-0 bottom-1">
                <div className="bg-green-700 w-full h-full rounded-full"></div>
            </div>
        </div>
    )
}

export default Avatar