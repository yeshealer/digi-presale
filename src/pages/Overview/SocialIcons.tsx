import DiscordIcon from '@/components/Icons/Discord'
import FacebookIcon from '@/components/Icons/Facebook'
import InstagramIcon from '@/components/Icons/Instagram'
import TelegramIcon from '@/components/Icons/Telegram'
import TwitterIcon from '@/components/Icons/Twitter'
import React from 'react'

export default function SocialIcons() {
    return (
        <div className='text-purple-200 shiny-effect-sm flex items-center gap-4 md:gap-10'>
            <div className='p-1 md:p-2 bg-gradient-to-t from-purple-500/50 to-purple-700/70 hover:from-purple-600/50 hover:to-purple-800/80 transition-all rounded-full cursor-pointer'>
                <TwitterIcon />
            </div>
            <div className='p-1 md:p-2 bg-gradient-to-t from-purple-500/50 to-purple-700/70 hover:from-purple-600/50 hover:to-purple-800/80 transition-all rounded-full cursor-pointer'>
                <FacebookIcon />
            </div>
            <div className='p-1 md:p-2 bg-gradient-to-t from-purple-500/50 to-purple-700/70 hover:from-purple-600/50 hover:to-purple-800/80 transition-all rounded-full cursor-pointer'>
                <InstagramIcon />
            </div>
            <div className='p-1 md:p-2 bg-gradient-to-t from-purple-500/50 to-purple-700/70 hover:from-purple-600/50 hover:to-purple-800/80 transition-all rounded-full cursor-pointer'>
                <DiscordIcon />
            </div>
            <div className='p-1 md:p-2 bg-gradient-to-t from-purple-500/50 to-purple-700/70 hover:from-purple-600/50 hover:to-purple-800/80 transition-all rounded-full cursor-pointer'>
                <TelegramIcon />
            </div>
        </div>
    )
}
