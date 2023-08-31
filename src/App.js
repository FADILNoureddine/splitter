
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-indigo-700 text-white'
                                      : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-indigo-700 text-white'
                                      : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-indigo-700 text-white'
                              : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-indigo-700 text-white'
                              : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          

          <main className="">
          <div className="mt-8 flow-root">
        <div className="overflow-auto h-[50rem]">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table table className="min-w-full divide-y divide-gray-300 border">
            <thead className='bg-slate-200 sticky -top-px'>
                <tr>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Order</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 ">Column Name</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Data Type</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Char Max</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Is Nullable</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Is Identity</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Default</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Example</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Description</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Referential</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Is Required</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Type</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">transco_nex6</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">transco_sap</th>
                <th scope="col" className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">Available Operations</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">data_template</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">255</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">mybu.mission.affair_phase.insert</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">DataProcess Template Name</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">template_required</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">data_source</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">20</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">NEX6</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">DataProcess Source</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">template_required</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">id</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">integer</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ID is generated for Insert / Required for Update</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">computed</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">label</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">255</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">AffairPhase label</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_name</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">qpi</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">30</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">'qpi.1'::character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Transco : ProjectQualificationIndex</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ProjectQualificationIndex</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_generalengagementlevelcode</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-IQP</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">legal_entity</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"> character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">5</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">SAP Code of the entity that carries the Affair_phase</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_legalaltenentityid</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSAS-BURKS</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">invoicing_entity</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">5</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">SAP Code of the entity that invoices</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_billinglegalentityid</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-BUKRS_FAC</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">8</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">type</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">30</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">'affair_phase.tm'::character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Transco : AffairPhaseType</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">AffairPhaseType</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_engagementcode</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">9</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">creation_date</td>
                <td className="text-ellipsis overflow-hidden px-3 py-4 text-sm text-gray-500">timestamp without time zone</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">2023-06-27 10:11:01.511084+01</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">AffairPhase creation date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">computed</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">10</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">last_update</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">timestamp without time zone</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">2023-06-27 10:11:01.511084+01</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Last update date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">computed</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">11</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">user_update</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">100</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Last user update</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">computed</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">12</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">version</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">integer</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">version is generated</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">computed</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">12</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">affair</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">integer</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">MyBU FK : mission.affair.id</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">computed</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">13</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">forecast_end_date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_project.alten_enddate</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-ENDDA</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">14</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">order_end_date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">not_applicable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">15</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ptf_end_date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">not_applicable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">16</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ctrl_export</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">boolean</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">?</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_isexportationcontrol</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">17</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">billing_type</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">50</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">'billing_type.fixed_price'::character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Transco : BillingType</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">BillingType</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_billingtypecode</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-PRART</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">18</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">affair_phase_status</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">50</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">0</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Transco : AffairPhaseStatus</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">AffairPhaseStatus</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-STATUT_SAP</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">19</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">confidentiality</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">10</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">?</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_confidentialitylevelcode</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-CONF</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">20</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">created_by</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">50</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">AffairPhase Creator name</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">computed</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">21</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">anu</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">boolean</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Alten * GmbH specificity</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_anu</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-ANU </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">22</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">first_start_date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Affair Phase Initial Start Date</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">23</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">sas_id</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">50</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">SAS : Project ID</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">sas_specific</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">alten_projectbackofficeid</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-PSPID </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">24</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">nbr_mission</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">integer</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Field computed by batch (1x/d 02h00)</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">computed</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>

                <tr>
                <th scope="row">25</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">opportunity</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">50</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">SalesForce.Opportunity.Id</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">crm_specific</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">26</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">sub_type_internal_project</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">100</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Transco : InternalProjectSubType</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">InternalProjectSubType</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-INTERNE</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">27</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">sub_type_service</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">100</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Transco : ServiceSubType</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ServiceSubType</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">28</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">customer_group_entity</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">integer</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    MyBU : mission.site.id d'un site de type site.msi ou
                    site.internal_project. Rempli uniquement quand le type de phase
                    affaire est affair_phase.msi ou affair_phase.internal_project.
                </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-KUNNR_FIN</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">29</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">cir</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">boolean</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">30</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">linked_affair_phase</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">integer</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">not_applicable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">31</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">legacy_id</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">100</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">LEGACY ID</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">fillable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">Integration Key</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">ZSASP-PSPID</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">32</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">migso</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">boolean</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">not_applicable</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">33</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">customer_legal_entity</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">50</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">SalesForce.LegalEntity__c.Id (main org unit)</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">crm_specific</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">34</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">contact</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">50</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">SalesForce.Contact.Id</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">crm_specific</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
                <tr>
                <th scope="row">35</th>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">customer</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">character varying </td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">50</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">true</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">SalesForce.Account.Id</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">false</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">crm_specific</td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                    <a href="#" class="btn btn-success">
                    Insert
                    </a>
                    <a href="#" class="btn btn-success">
                    Update
                    </a>
                    <a href="#" class="btn btn-success">
                    Upsert
                    </a>
                </td>
                </tr>
            </tbody>
            <tfoot className='bg-slate-200 sticky -bottom-0'>
            <tr className=''>
                <th className="whitespace-nowrap text-left text-sm font-semibold text-gray-900">All values</th>
                <th className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">System values</th>
                <th className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Custom values</th>
                <th className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Operations</th>
            </tr>
            </tfoot>
            </table>

    </div>
    </div>
    </div>
          </main>
        </div>
      </div>
    </>
  )
}


    // white-space: nowrap;                 ==whitespace-nowrap
    //     display: -webkit-box;            
    //     -webkit-line-clamp: 1;
    //     -webkit-box-orient: vertical;
    //     overflow: hidden;
    //     height: 2rem;
    //     width: 10vw;