"use client";
// import profileImage from '/public/imgprofile.jpeg';
import proImage from '/public/imageprofile.jpeg';
import avanitha from '/public/avanithafinalphoto.jpeg'
import cat from '/public/catfinalphoto.jpeg'
import man1 from '/public/men1finalphoto.jpeg'
import { ListFilter, Search } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "./theme-switch";
import Conversation from "./conversation";
import { UserButton } from "@clerk/nextjs";

import UserListDialog from "./user-list-dialog";
import { useConvexAuth, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect } from "react";
import { useConversationStore } from "@/store/chat-store";
import Image from 'next/image';
import Link from 'next/link';

const LeftPanel = () => {
	const { isAuthenticated, isLoading } = useConvexAuth();
	const conversations = useQuery(api.conversations.getMyConversations, isAuthenticated ? undefined : "skip");

	const { selectedConversation, setSelectedConversation } = useConversationStore();

	useEffect(() => {
		const conversationIds = conversations?.map((conversation) => conversation._id);
		if (selectedConversation && conversationIds && !conversationIds.includes(selectedConversation._id)) {
			setSelectedConversation(null);
		}
	}, [conversations, selectedConversation, setSelectedConversation]);

	if (isLoading) return null;

	return (
		<div className='w-1/4 border-gray-600 border-r'>
			<div className='sticky top-0 bg-left-panel z-10'>
				{/* Header */}
				<div className='flex justify-between bg-gray-primary p-3 items-center'>
					<UserButton />

					<div className='flex items-center gap-3'>
						{isAuthenticated && <UserListDialog />}
						<ThemeSwitch />
					</div>
				</div>
				<div className='p-3 flex items-center'>
					{/* Search */}
					<div className='relative h-10 mx-3 flex-1'>
						<Search
							className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10'
							size={18}
						/>
						<Input
							type='text'
							placeholder='Search or start a new chat'
							className='pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent'
						/>
					</div>
					<ListFilter className='cursor-pointer' />
				</div>
			</div>

			{/* Chat List */}
			<div className='my-3 flex flex-col gap-0 max-h-[80%] overflow-auto'>
				{/* Conversations will go here*/}
				{conversations?.map((conversation) => (
					<Conversation key={conversation._id} conversation={conversation} />
				))}
			<div className='flex gap-6 pl-4 mb-4'>
				<div >
				<Image
					src={proImage}
					width={60}
					height={40}
					alt="Picture of the author"
					className='rounded-full'
				/>
				</div>
				<Link href="/chats">
				<div >
					<p className='font-semibold text-start text-nowrap text-xl '>John paul</p>
					<p className='text-nowrap text-gray-500'>see you tommarow at bar</p>
				</div>
				</Link>
				
				
			</div>
			<div className='flex gap-6 pl-4 mb-4'>
				<div >
				<Image
					src={man1}
					width={60}
					height={40}
					alt="Picture of the author"
					className='rounded-full'
				/>
				</div>
				<div>
					<p className='font-semibold text-start text-nowrap text-xl '>Shambulinga</p>
					<p className='text-nowrap text-gray-500'>how u doing man?</p>
				</div>
				
			</div>
			<div className='flex gap-6 pl-4 mb-4'>
				<div >
				<Image
					src={cat}
					width={60}
					height={40}
					alt="Picture of the author"
					className='rounded-full'
				/>
				</div>
				<div>
					<p className='font-semibold text-start text-nowrap text-xl '>zameer</p>
					<p className='text-nowrap text-gray-500'>kaise ho bhe</p>
				</div>
				
			</div>
			<div className='flex gap-6 pl-4 mb-4'>
				<div >
				<Image
					src={avanitha}
					width={60}
					height={40}
					alt="Picture of the author"
					className='rounded-full'
				/>
				</div>
				<div>
					<p className='font-semibold text-start text-nowrap text-xl '>Anvika</p>
					<p className='text-nowrap text-gray-500'>u r u coming to bangalore</p>
				</div>
				
			</div>
				{conversations?.length === 0 && (
					<>
						<p className='text-center text-gray-500 text-sm mt-3'>No conversations yet</p>
						<p className='text-center text-gray-500 text-sm mt-3 '>
							We understand {"you're"} an introvert, but {"you've"} got to start somewhere 😊
						</p>
					</>
				)}
			</div>
		</div>
	);
};
export default LeftPanel;
