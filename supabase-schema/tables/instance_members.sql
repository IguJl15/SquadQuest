create table
  public.instance_members (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    member uuid null,
    status public.instance_member_status null,
    instance uuid not null,
    constraint instance_members_pkey primary key (id),
    constraint instance_members_member_fkey foreign key (member) references users (id),
    constraint instance_members_instance_fkey foreign key (instance) references instances (id)
  );
