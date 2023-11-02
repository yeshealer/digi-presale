import TelegramIcon from '@/components/Icons/Telegram'
import TwitterIcon from '@/components/Icons/Twitter'
import React from 'react'
import YoutubeIcon from '@/components/Icons/Youtube'

export default function SocialIcons() {
    return (
        <div className='text-purple-200 shiny-effect-sm flex items-center gap-6 md:gap-10'>
            <div className='p-1 md:p-2 bg-gradient-to-t from-purple-500/50 to-purple-700/70 hover:from-purple-600/50 hover:to-purple-800/80 transition-all rounded-full cursor-pointer'>
                <TwitterIcon />
            </div>
            <div className='p-1 md:p-2 bg-gradient-to-t from-purple-500/50 to-purple-700/70 hover:from-purple-600/50 hover:to-purple-800/80 transition-all rounded-full cursor-pointer'>
                <YoutubeIcon />
            </div>
            <div className='p-1 md:p-2 bg-gradient-to-t from-purple-500/50 to-purple-700/70 hover:from-purple-600/50 hover:to-purple-800/80 transition-all rounded-full cursor-pointer'>
                <TelegramIcon />
            </div>
        </div>
    )
}
