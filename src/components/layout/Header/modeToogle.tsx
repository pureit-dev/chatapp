"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

import { useTheme } from "next-themes";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function ModeToggle() {
	const { setTheme } = useTheme();
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<p
									onClick={() => setTheme("light")}
									className={classNames(
										active
											? "bg-gray-100 text-gray-900"
											: "text-gray-700",
										"block px-4 py-2 text-sm"
									)}
								>
									Light
								</p>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<p
									onClick={() => setTheme("dark")}
									className={classNames(
										active
											? "bg-gray-100 text-gray-900"
											: "text-gray-700",
										"block px-4 py-2 text-sm"
									)}
								>
									Dark
								</p>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<p
									onClick={() => setTheme("system")}
									className={classNames(
										active
											? "bg-gray-100 text-gray-900"
											: "text-gray-700",
										"block px-4 py-2 text-sm"
									)}
								>
									System
								</p>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
