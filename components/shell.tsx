'use client';

import React, { useState, useEffect } from 'react';
import { NavItem, TimeRange, UserProfile } from '@/types/types';

import { DEFAULT_NAV_ITEMS } from './navigation-items';
import { SideNav } from './sidenav';
import { TopNav } from './topnav';

interface ShellProps {
    children?: React.ReactNode;
    navItems?: NavItem[];
    ranges?: TimeRange[];
    defaultRange?: TimeRange;
    user?: UserProfile;
    mailCount?: number;
    bellCount?: number;
}

const STORAGE_KEY = 'onionloop_sidenav_expanded';

export const Shell: React.FC<ShellProps> = ({
    children,
    navItems = DEFAULT_NAV_ITEMS,
    ranges = ['Today', '7D', '30D'],
    defaultRange = 'Today',
    user = {
        name: 'Onionloop Admin',
        role: 'Super Admin',
        initials: 'AD',
    },
    mailCount = 1,
    bellCount = 4,
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
    const [activeRange, setActiveRange] = useState<TimeRange>(defaultRange);
    const [lastUpdated, setLastUpdated] = useState<number>(0);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== null) {
            setIsExpanded(stored === 'true');
        }
    }, []);

    const handleToggle = () => {
        setIsExpanded((prev) => {
            const next = !prev;
            localStorage.setItem(STORAGE_KEY, String(next));
            return next;
        });
    };

    const handleRangeSelect = (range: TimeRange) => {
        setActiveRange(range);
        setLastUpdated(0);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setLastUpdated((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const lastUpdatedFormatted = `Last updated ${lastUpdated === 0 ? 'just now' : `${lastUpdated} sec ago`}`;

    return (
        <div className="flex h-screen w-full bg-[#FBFBFB] overflow-hidden relative">
            <SideNav
                items={navItems}
                isExpanded={isExpanded}
                isMobileOpen={isMobileOpen}
                onToggle={handleToggle}
                onMobileClose={() => setIsMobileOpen(false)}
                ranges={ranges}
                activeRange={activeRange}
                onRangeSelect={handleRangeSelect}
                lastUpdatedText={lastUpdatedFormatted}
            />

            <div className="flex flex-col flex-1 min-w-0 h-screen overflow-hidden">
                <TopNav
                    ranges={ranges}
                    activeRange={activeRange}
                    onRangeSelect={handleRangeSelect}
                    lastUpdatedText={lastUpdatedFormatted}
                    user={user}
                    mailCount={mailCount}
                    bellCount={bellCount}
                    onMenuClick={() => setIsMobileOpen(true)}
                />
                <main className="flex-1 overflow-y-auto p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};