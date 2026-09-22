'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TimeRange, UserProfile } from '@/types/types';
import { BellIcon, ChevronDownIcon, MailIcon } from './icons/svgs';

interface TopNavProps {
    ranges?: TimeRange[];
    activeRange?: TimeRange;
    onRangeSelect?: (range: TimeRange) => void;
    lastUpdatedText?: string;
    user?: UserProfile;
    mailCount?: number;
    bellCount?: number;
    onMenuClick?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
    ranges = ['Today', '7D', '30D'],
    activeRange = 'Today',
    onRangeSelect,
    lastUpdatedText = 'Last updated 2 sec ago',
    user = {
        name: 'Onionloop Admin',
        role: 'Super Admin',
        initials: 'AD',
    },
    mailCount = 1,
    bellCount = 4,
    onMenuClick,
}) => {
    const pathname = usePathname();

    return (
        <header className="h-20 bg-white border-b border-[#ECECEC] px-4 lg:px-6 flex items-center justify-between gap-4 w-full shrink-0">
            <div className="flex items-center gap-3 lg:gap-4">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="p-2 rounded-xl border border-[#ECECEC] text-[#131313] hover:bg-gray-50 lg:hidden"
                    aria-label="Open Sidebar Menu"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>

                <div className="hidden lg:flex items-center gap-1.5">
                    {ranges.map((range) => {
                        const isActive = activeRange === range;
                        return (
                            <button
                                key={range}
                                type="button"
                                onClick={() => onRangeSelect?.(range)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 ${isActive
                                        ? 'border-[#04907E] bg-[#E7F6EC] text-[#04907E]'
                                        : 'border-[#E0E0E0] bg-white text-[#6C6C6C] hover:border-gray-400'
                                    }`}
                            >
                                {range}
                            </button>
                        );
                    })}
                </div>

                <div className="hidden lg:flex items-center gap-2 text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B0B0B0]" />
                    <span className="text-[#6C6C6C]">{lastUpdatedText}</span>
                </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
                <div className="flex items-center gap-2 lg:gap-3">
                    <Link
                        href="/messages"
                        aria-label="Open messages"
                        className={`relative p-2 lg:p-2.5 rounded-full border transition-colors ${pathname?.startsWith('/messages')
                            ? 'bg-[#E7F6EC] border-[#04907E]'
                            : 'bg-white border-[#EBEBEB] hover:bg-gray-50'
                            }`}
                    >
                        <MailIcon size={18} color={pathname?.startsWith('/messages') ? '#024E44' : '#555555'} />
                        {mailCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#D32F2F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                                {mailCount}
                            </span>
                        )}
                    </Link>

                    <Link
                        href="/announcements"
                        aria-label="Open notifications"
                        className={`relative p-2 lg:p-2.5 rounded-full border transition-colors ${pathname?.startsWith('/announcements')
                            ? 'bg-[#E7F6EC] border-[#04907E]'
                            : 'bg-white border-[#EBEBEB] hover:bg-gray-50'
                            }`}
                    >
                        <BellIcon size={18} color={pathname?.startsWith('/announcements') ? '#024E44' : '#555555'} />
                        {bellCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#D32F2F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                                {bellCount}
                            </span>
                        )}
                    </Link>
                </div>

                <div
                    className="flex items-center gap-2.5 lg:gap-3 pl-2 pr-3 py-1.5 rounded-full border border-[#EBEBEB] bg-white"
                >
                    <div
                        className="w-8 h-8 lg:w-9 lg:h-9 rounded-full font-bold flex items-center justify-center text-xs bg-[#E7F6EC] text-[#024E44]"
                    >
                        {user.initials}
                    </div>
                    <div className="hidden md:flex flex-col text-left">
                        <span className="text-xs font-bold leading-none text-[#131313]">
                            {user.name}
                        </span>
                        <span className="text-[10px] leading-tight text-[#6C6C6C] mt-0.5">
                            {user.role}
                        </span>
                    </div>
                    <ChevronDownIcon size={16} color="#6C6C6C" />
                </div>
            </div>
        </header>
    );
};