import * as React from 'react';
import type { Metadata } from 'next';
import { config } from '@/config';
import { FormularioCrearCliente } from '@/components/dashboard/maestro/clientes/formulario-crear-cliente';
export const metadata = { title: `Maestro | Clientes | ${config.site.name}` } satisfies Metadata;

export default function ClientesPage(): React.JSX.Element {
  // PARA ANEXAR VARIOS COMPONENTES
    // return (
    //   <div>
    //     <FormularioCrearCliente />
    //   </div>
    // );

    return <FormularioCrearCliente />;
  }